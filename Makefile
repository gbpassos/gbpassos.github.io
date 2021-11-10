podman:
	sudo podman run -ti --rm -p 8080:8080 --mount type=bind,src=${PWD},dst=${PWD} -w ${PWD} -u 1000:1000 --env NODE_OPTIONS=--openssl-legacy-provider node bash