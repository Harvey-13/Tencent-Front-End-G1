/**
 * 毫秒数转成mm:ss格式
 * @param ms 毫秒数
 * @return 'mm:ss'
 */
export function msTomin(ms: number): string {
  let s = Math.floor(ms / 1000);
  let min: any = Math.floor(s / 60);
  let sec: any = s - min * 60;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
}
