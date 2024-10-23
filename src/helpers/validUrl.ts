export const isValidHttpUrl = (string?: string) => {
  try {
    const newUrl = new URL(string ?? "")
    return newUrl.protocol === "http:" || newUrl.protocol === "https:"
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return false
  }
}
