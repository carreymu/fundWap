

function stringFormat (formatted, args) {
    for (let i = 0; i < args.length; i++) {
      let regexp = new RegExp('\\{' + i + '\\}', 'gi')
      formatted = formatted.replace(regexp, args[i])
    }
    return formatted
  }

export default stringFormat;