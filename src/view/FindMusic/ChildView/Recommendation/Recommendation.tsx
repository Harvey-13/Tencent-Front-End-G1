import React from 'react';
import RecommendationBanner from './ChildComp/RecommendationBanner/RecommendationBanner';
import RecommendationList from './ChildComp/RecommendationList'
export default function Recommendation() {
  return (
    <>
      <RecommendationBanner />
      <RecommendationList />
    </>
  );
}
