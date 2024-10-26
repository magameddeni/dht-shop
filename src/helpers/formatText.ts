export const formatText = (
  text: string,
  replacements: Record<string, string>,
) => {
  let formattedText = text

  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")
    formattedText = formattedText.replace(regex, value)
  }

  return formattedText
}

export const replacements = {
  '/"': "<p>",
  '"\\/': "</p>",
  "\\[b\\]": '<span className="bold">',
  "\\[/b\\]": "</span>",
  "\\[h6\\]": '<h6 className="h6">',
  "\\[/h6\\]": "</h6>",
}
