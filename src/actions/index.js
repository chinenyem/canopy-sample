import * as actionTypes from '../constants/actionTypes';

export const updateScheduledItem = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.UPDATE_SCHEDULED_ITEM,
});

export const editTechComment = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.EDIT_TECH_COMMENT
});

export const flagComment = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.FLAG_COMMENT
});
