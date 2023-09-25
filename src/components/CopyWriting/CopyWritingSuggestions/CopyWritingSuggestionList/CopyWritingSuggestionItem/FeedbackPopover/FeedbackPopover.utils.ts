import type { FeedbackItem, FeedbackType } from '../CopyWritingSuggestionItem.types';

export const isContainFeedbackItem = (feedbacks: FeedbackItem[], type: FeedbackType) =>
  feedbacks.find((item: FeedbackItem) => item.type === type) !== undefined;
