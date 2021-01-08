pipeline {
    agent any
    
    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    environments {
        ARTIFACT_ID = "azuladotoujours/basic-express"
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
            when{
                branch 'master'
            }
            steps {
                script {
                    docker.withRegistry("","DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}

