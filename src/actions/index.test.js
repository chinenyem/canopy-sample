import * as actions from './index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  describe('service items', () => {
    it('should create an action to update a service item', () => {
      const itemId = 1;
      const args = { completed: false };
      const expectedAction = {
        args,
        itemId,
        type: types.UPDATE_SCHEDULED_ITEM,
      };

      expect(actions.updateScheduledItem(itemId, args)).toEqual(expectedAction);
    });
    it('should create an action to edit a service item', () => {
      const itemId = 1;
      const args = { comment: '' };
      const expectedAction = {
        args,
        itemId,
        type: types.EDIT_TECH_COMMENT,
      };

      expect(actions.editTechComment(itemId, args)).toEqual(expectedAction);
    });

    it('should create an action to flag a service item', () => {
      const itemId = 1;
      const args = { flag: true };
      const expectedAction = {
        args,
        itemId,
        type: types.FLAG_COMMENT,
      };

      expect(actions.flagComment(itemId, args)).toEqual(expectedAction);
    });



  });
});
