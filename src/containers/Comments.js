import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';
import { editTechComment } from '../actions';
import { flagComment } from '../actions';


class Comments extends Component {
  render() {
    const {
      className,
      editTechComment,
      flagComment,
      items,
    } = this.props;

    return(
      <div className={`${className} Comments`}>
        <h3>Comments</h3>
        <ul>
          { map(items, item =>
            <Comment
            clickHandler={editTechComment.bind(null, item)}
            toggleHandler={flagComment.bind(null, item)}
            item={item}
            key={item.id}
            />)
          }
        </ul>
      </div>

    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  editTechComment: (item) => {
    dispatch(editTechComment(item.id, { comment: item.body  }));
  },
  flagComment: (item) => {
    dispatch(flagComment(item.id, { flagged: item.flagged  }));
  },
});

Comments.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
