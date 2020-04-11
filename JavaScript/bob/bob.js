export const hey = (message) => {
  const noSpace = message.trim()
  const onlyAlpha = noSpace.replace(/[^a-zA-Z]/g, '')
  let response =""
  const yelling = onlyAlpha == onlyAlpha.toUpperCase() && onlyAlpha.length >0
  
  if(!yelling && noSpace.slice(-1) == "?"){ response = "Sure."}
  else if(yelling &&noSpace.slice(-1) == "?"){response = "Calm down, I know what I'm doing!"}
  else if ( yelling && onlyAlpha.length > 0){response = 'Whoa, chill out!'}
  else if(noSpace.slice(-1) == "." || noSpace.length > 0){ response =  'Whatever.'}
  else{ response = 'Fine. Be that way!'}

  return response
};
