
pipeline{
agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
 stages{
       stage('Checkout-git'){
              steps {
               git poll: true, url: 'https://github.com/AzuladoToujours/BasicExpressServer.git'    
              }
       }
       stage('InstallRequirements'){
              steps {
                     sh '''
                           bash -c "npm i"
                     '''
              }
       }
       stage('TestApp'){
              steps {
                     sh '''
                           bash -c "npm test"
                     '''  
              }
       }
       stage('RunApp'){
              steps {
                     sh '''
                           bash -c "npm start & ls"
                     '''
              }
       }
 
 }
}