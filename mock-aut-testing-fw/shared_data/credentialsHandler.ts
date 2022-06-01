import * as fs from 'fs';


var currentUser;

function init(){
  const TARGET_ENV: string = process.env.CURRENT_ENV as string;

  if( TARGET_ENV === undefined ){
    throw new Error("CURRENT_ENV environment variable must be set");
  }

  const CREDENTIALS_PATH = `./fixtures/credentials_${TARGET_ENV}.json`;

  console.info('Reading the credentials data');
  try{
    const data = fs.readFileSync(
      CREDENTIALS_PATH,
      { encoding: 'utf8', flag: 'r' }
    );
    currentUser = JSON.parse(data);
    console.info(`Current user ${currentUser.username}`);
  }catch( error ){
    console.error('Error reading the credentals file');
    throw error;
  }
}

export{ init, currentUser }