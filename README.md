# mean-stack-backend

Install NodeJS and NPM from https://nodejs.org/en/download/.

Install MongoDB Community Server from https://www.mongodb.com/download-center.

Run MongoDB, instructions are available on the install page for each OS at https://docs.mongodb.com/manual/administration/install-community/

Install all required npm packages by running `npm install` from the command line in the project root folder (where the package.json is located).

Start the api by running `npm start` from the command line in the project root folder, you should see the message Server listening on `port 4000`.

# feautures

Using API route `'/account/register'` to register new user.

Using API route `'/account/login'` to login on admin panel.

Using API route `'/user'` to  create, update, delete user. You need to be logged in on the client side. JWT token required for this route.

Using API route `'/contact'` to send POST request with customer email.

I know that `.env` file is not desirable to push on GitHub. but there are test email credentials to log in https://ethereal.email/ and check received email.

Ps: I haven't enought time to create `'/content'` API route for edidting text field, just started with a plan how to do it. But it needs time and clear mind. Nevertheless, I've created `'/user'` route instead. 
