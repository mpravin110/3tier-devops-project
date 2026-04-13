pipeline {
  agent any

  environment {
    AWS_REGION = 'us-west-1'
    ACCOUNT_ID = '743337585672'
    ECR_REPO = "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/3tier-app"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/mpravin110/3tier-devops-project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        // FIXED PATH 👇
        sh 'docker build -t 3tier-app ./3tier-devops-project'
      }
    }

    stage('Login to ECR') {
      steps {
        sh '''
        aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO
        '''
      }
    }

    stage('Push to ECR') {
      steps {
        sh '''
        docker tag 3tier-app:latest $ECR_REPO:latest
        docker push $ECR_REPO:latest
        '''
      }
    }

    stage('Trigger CD') {
      steps {
        sh '''
        curl -X POST http://54.219.160.185:8080/job/3tier-cd-pipeline/build?token=deploy123
        '''
      }
    }

  }
}
