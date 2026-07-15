pipeline {

    agent any


    stages {

        stage('Deploy Offers Service') {

            steps {

                script {

                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(

                                configName: 'Ubuntu',

                                verbose: true,

                                transfers: [

                                    sshTransfer(

                                        execCommand: '''
                                            set -e

                                            echo "===== OFFERS SERVICE DEPLOYMENT STARTED ====="

                                            cd /home/master/project/microservices/offers-service

                                            git fetch origin

                                            git reset --hard origin/main

                                            npm install

                                            if pm2 describe offers-service > /dev/null 2>&1
                                            then
                                                pm2 restart offers-service
                                            else
                                                pm2 start app.js --name offers-service
                                            fi

                                            pm2 save

                                            echo "===== OFFERS SERVICE DEPLOYED SUCCESSFULLY ====="
                                        '''
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
    post {
        success {
            echo "======================================"
            echo "Offers Service Deployment Successful"
            echo "======================================"
        }
        failure {
            echo "======================================"
            echo "Offers Service Deployment Failed"
            echo "======================================"
        }
        always {
            cleanWs()
        }
    }
}