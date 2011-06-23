/*
  All the functions in main.js are publicly accessible

  The contents of the files in the shared directory are also available.
*/

function getConfig(){
  // The config variable from config.js can be accessed directly from here
  return {'config': config};   
}