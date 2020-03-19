export const getParam = param => {
  if (typeof window !== `undefined`) {
    return new URLSearchParams(window.location.search).get(param)
  }
  return null
}
