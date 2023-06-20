# Next.js demo.
# step 1:- 
I forked the code from github repo "https://github.com/ivandotv/nextjs-pino-log-demo". and renamed as "next.sj".

# step 2:- 
I created one folder in local as amplify and in that one file for terraform as "amplify.tf", wrote terraform code for creation of "aws amplify".
The code as below represents.
resource "aws_amplify_app" "mynextjs" {
    name = "mynext.js"
    repository = "github code link"
    access_token = "github-access-token"

      build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm install
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT
  
}

# step 3:-
The aws amplify app is created, choose to github and "connect branch" with available repo as well desired branch in the repo.

# step 4:-
Create one IAM role in aws with required access and connect it with.

# step 5:-
Save and deploy, and wait till provision, build, and deploy stages get complate successfully, now app is ready, copy the url and check it.

# step 6:- 
For CI/CD, choose "connect branch", save and deploy, wait till new app creation for dev/test...etc.
Before CI/CD image " ![github-1](https://github.com/sayed-basha/next.sj/assets/116866580/c3328c7e-4dd9-4128-89b3-045544aebf21)"
After CD/CD image o/p  "![github-2](https://github.com/sayed-basha/next.sj/assets/116866580/e7a15021-91c7-4d35-b38f-e4f945f8fb56)"


# step 7:- 
Now change the code as per your requirement, and wait for code to build and deploy, now the new changes will reflects on the application.
# Application url
https://dev.d1qxsraqi0agz9.amplifyapp.com/
# github url

https://github.com/sayed-basha/next.sj.git


