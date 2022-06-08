# Summary
This is a base blitz app with one user created and logged in. The db.sqlite file is checked into this repo to make it easier for others to test. You should be able to just run the shell script (described below).

# How to run
in one terminal:
```
git clone https://github.com/mkondel/api-auth-test.git
cd api-auth-test
yarn
yarn dev
```
in another terminal:
```
cd api-auth-test
cd try
sh try-secureApiRoute.sh
```

# How to interpret
The script only supplies the Session Token with the API request. Anti-CSRF token does not seem to be required...
