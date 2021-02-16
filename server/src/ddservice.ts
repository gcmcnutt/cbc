import StatsD from 'hot-shots';

export const dogstatsd = new StatsD({globalTags: [ `namespace:${process.env.REACT_APP_NAMESPACE}` ]});
