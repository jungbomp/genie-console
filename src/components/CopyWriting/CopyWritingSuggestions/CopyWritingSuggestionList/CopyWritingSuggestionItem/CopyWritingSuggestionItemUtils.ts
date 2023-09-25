import type { FeedbackItem, FeedbackType } from './CopyWritingSuggestionItem.types';

export const feedbackTypeToFeedbackString = (type: FeedbackType): string | undefined => {
  const feedbackStrings = {
    INCORRECT: '정확하지 않은 답변이에요',
    AWKWARD: '문구가 자연스럽지 않아요',
    NOT_REFLECTED: '요청사항이 반영되지 않았어요',
  };

  // @ts-ignore
  return feedbackStrings[type];
};

export const feedbackItemToFeedbackString = (item: FeedbackItem): string | undefined => {
  return feedbackTypeToFeedbackString(item.type) ?? item.etcFeedback;
};
