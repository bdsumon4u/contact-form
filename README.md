## Contact Form

This is a contact form html page that runs on nodejs & express server. You can clone this repository or pull docker image to test this out.

### Using Docker

Run the following commands.

```
docker run -it -d -p 3030:3333 bdsumon4u/contact-form:latest
```

Now go to your favorite browser & enter: `localhost:3030` to see the form.

### I don't want to use Docker

First clone the repository.

```
git clone https://github.com/bdsumon4u/contact-form.git
```

Now run following command.

```
cd contact-form && npm install && npm run start
```

Now got to your favorite browser & enter: `localhost:3030` to see the form.

---



> **Note:** If your port `80` is not using by any other services, then you can change the port `3030` to `80` and play with the form on the `localhost`.
