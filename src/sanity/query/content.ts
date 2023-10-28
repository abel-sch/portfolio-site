export const image = `
{
    "url": asset->.url,
    "metadata": {
        "dimensions": asset->.metadata.dimensions,
        "blurHash": asset->.metadata.blurHash
    }
}`

export const content = `
{
    ...,
    _type == 'mockup' => {
      ...,
      "video": video.asset->.url,
    },
    _type == 'screenshots' => {
        images[] ${image},
    }
}`