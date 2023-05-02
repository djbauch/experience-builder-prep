import React, { lazy, Suspense } from 'react'

const LazyCoordConvert = lazy(() => import('./CoordConvert'))

const CoordConvert = (props) => (
  <Suspense fallback={null}>
    <LazyCoordConvert {...props} />
  </Suspense>
)

export default CoordConvert
