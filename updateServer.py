import docker
import subprocess
from flask import Flask
from flask_restful import Resource, Api, request


client = docker.from_env()
app = Flask(__name__)
api = Api(app)

class Webhook(Resource):
    def get(self):
        return {"status":"ok"}

    def post(self):
        json_data = request.get_json(force=True)
        print(json_data)
        repo_name = json_data['repository']['repo_name']
        tag = json_data['push_data']['tag']
        print(repo_name + ':' + tag)
        stoppingContainer(repo_name)
        startContainer(repo_name, tag)
        return {"status":"ok"}


api.add_resource(Webhook, '/')

def startContainer(imageName, tag):
    if imageName == 'davidcarl/lsd-backend':
        subprocess.Popen(['docker','run','-d','-p', '8080:8080', imageName + ':' + tag])
    elif imageName == 'davidcarl/si-mp3-frontend':
        subprocess.Popen(['docker','run','-d','-p','80:3000', imageName + ':' + tag])
    elif imageName == 'davidcarl/si-mp3-backend':
        subprocess.Popen(['docker','run','-d','-p','88:3000', imageName + ':' +tag])

def stoppingContainer(imageName):
    containers = client.containers.list()
    for each in containers:
        print(each.image.attrs)
        name = each.image.attrs['RepoDigests'][0].split('@')[0]
        if name == imageName:
            print('Stopping id:', each.id)
            each.stop()

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)