import {
  Filtering,
  FilterRule,
} from './decorators/filteringParms/interfaces/filtering.interface';

export const getWhere = (filter: Filtering | undefined) => {
  if (!filter) return {};

  switch (filter.rule as FilterRule) {
    case FilterRule.IS_NULL:
      return { [filter.property]: null };
    case FilterRule.IS_NOT_NULL:
      return { [filter.property]: { $ne: null } };
    case FilterRule.EQUALS:
      return { [filter.property]: filter.value };
    case FilterRule.NOT_EQUALS:
      return { [filter.property]: { $ne: filter.value } };
    case FilterRule.GREATER_THAN:
      return { [filter.property]: { $gt: filter.value } };
    case FilterRule.GREATER_THAN_OR_EQUALS:
      return { [filter.property]: { $gte: filter.value } };
    case FilterRule.LESS_THAN:
      return { [filter.property]: { $lt: filter.value } };
    case FilterRule.LESS_THAN_OR_EQUALS:
      return { [filter.property]: { $lte: filter.value } };
    case FilterRule.LIKE:
      return { [filter.property]: { $regex: new RegExp(filter.value, 'i') } };
    case FilterRule.NOT_LIKE:
      return { [filter.property]: { $not: new RegExp(filter.value, 'i') } };
    case FilterRule.IN:
      return { [filter.property]: { $in: filter.value.split(',') } };
    case FilterRule.NOT_IN:
      return { [filter.property]: { $nin: filter.value.split(',') } };
    default:
      return {};
  }
};
