/**
 * @file picList.ts 头像框、贴纸列表
 * @description 头像框、贴纸列表
 * @author xiao li
 * @copyright 黎<https://www.xiaoli.vip>
 * @createDate 2023-09-15 15:10
 */


export const styleEnums  = {
    'spring': '春节',
    'moon': '中秋节',
    'national': '国庆节'
}

interface StyleInfoType {
    id: string,
    name: string,
    desc: string,
    frameNum: number,
    frameList: string[],
    markNum: number,
    markList: string[]
}
export const styleList: StyleInfoType[]  = [
    {
        id: 'spring',
        name: '春节',
        desc: '辞暮尔尔，烟火年年~',
        // frameNum: 19,
        frameNum: 2,
        frameList: [],
        markNum: 2,
        markList: []
    },
    {
        id: 'moon',
        name: '中秋节',
        desc: '月光所至，万事胜意~',
        // frameNum: 7,
        frameNum: 2,
        frameList: [],
        // markNum: 14,
        markNum: 2,
        markList: []
    },
    {
        id: 'national',
        name: '国庆节',
        desc: '生在红旗下，长在春风里~',
        // frameNum: 18,
        frameNum: 2,
        frameList: [],
        // markNum: 7,
        markNum: 2,
        markList: []
    }
]

export const picList = styleList.map(item => {
    const frameList = [...Array(item.frameNum).keys()].map(num => num + 1)
    item.frameList = frameList.map(i => `http://www.cdn.ouzexi.cn/imgs/${item.id}/frame/${i}.png`)

    const markList = [...Array(item.markNum).keys()].map(num => num + 1)
    item.markList = markList.map(i => `http://www.cdn.ouzexi.cn/imgs/${item.id}/mark/${i}.png`)

    return item
})
