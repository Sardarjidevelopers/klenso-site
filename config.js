// Public settings for the Klenso site. Nothing secret belongs in this file.
// The client-side token is public by design (Paddle.js needs it in the browser).
// To go live: set env to "production" and replace token and priceId with the LIVE ones.
window.KLENSO = {
  env: "sandbox",
  token: "test_6f9cb3600db4aa49f72ad1dbe59",
  priceId: "pri_01m7g3csvmh99ykx25s07x7v09",
  downloadUrl: "", // set to the GitHub release asset URL when the first release exists
};
