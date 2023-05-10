import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1527936",
  key: "6b2fcbf02a2ec889174a",
  secret: "470b5ec01a455ec2e4b9",
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("6b2fcbf02a2ec889174a", {
  cluster: "ap2",
  forceTLS: true,
});

/*
PUSHER_APP_ID=1527936
PUSHER_KEY=6b2fcbf02a2ec889174a
PUSHER_SECRET=470b5ec01a455ec2e4b9
CLIENT_PUSHER=6b2fcbf02a2ec889174a
*/
