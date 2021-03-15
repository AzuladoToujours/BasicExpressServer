pipeline {
    agent any
    
    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "azuladotoujours/basic-express"
        SERVICE_NAME = 'basic-express'
        STACK_NAME = 'test'
    }

    stages {
        stage('Build'){
            steps {
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }
        stage('Publish'){
            steps {
                script {
                    docker.withRegistry("","DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Schedule Deploy'){
            steps {
                build job: 'Express-CD', parameters: [string(name: 'ARTIFACT_ID', value:"${env.ARTIFACT_ID}"), string(name: 'SERVICE_NAME', value: "${SERVICE_NAME}"), string(name: 'STACK_NAME', value: "${STACK_NAME}")], wait: false
            }
        }
    }
}

