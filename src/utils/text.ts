export const Text = {
  truncate(value: string, maxLength: number = 20): string {
    if (!value) return "";
    if (value.length <= maxLength) return value;
    return `${value.slice(0, maxLength)}...`;
  },

  /**
   * Returns the first characters of each word in a text.
   *
   * @param value A string
   * @returns
   */
  getInitials(value: string) {
    return value
      .split(" ")
      .slice(0, 2)
      .reduce((prev: string, word: string) => {
        return prev.concat(word[0]);
      }, "");
  },
};
