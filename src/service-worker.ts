import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@layer0/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@layer0/prefetch/sw/DeepFetchPlugin'

skipWaiting()
clientsClaim()
new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      { /* PLP thumbnail*/
        selector: '.thumb-link img',
        maxMatches: 2,
        attribute: 'data-src',
        as: 'image',
      },
      { /* Homepage hero image */
        selector: '.mw-home-hero',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPLPHero
      },
    ]),
  ],
})
  .route()

// default helper functions that may be useful

function deepFetchPDPImages({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
}

function deepFetchPLPHero({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  // const blurred = url.replace('c_scale,w_411', 'c_scale,w_411,q_1,e_blur:999')
  prefetch(url, 'image')
  // prefetch(blurred, 'image')
}

function logPrefetchedContent({$el}) { // for testing
  console.log("[][]][][[][]][][][][][[]][[][][]")
  console.log("content '"+$el.attr('src')+"' is being prefetched...")
  const url = $el.attr('src')
  // const blurred = url.replace('c_scale,w_411', 'c_scale,w_411,q_1,e_blur:999')
  prefetch(url, 'image')
}
