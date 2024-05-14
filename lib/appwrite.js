export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aora",
  projectId: "6642d424002329106fe4",
  databaseId: "664300c30019a09cf004",
  userCollectionId: "664301580021a0df3648",
  videoCollectionId: "66430c8f000f460b81b7",
  storageId: "66432312002018c8155e",
};

import { Client } from "react-native-appwrite";
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint("config.endpoint") // Your Appwrite Endpoint
  .setProject("config.projectId") // Your project ID
  .setPlatform("config.platform"); // Your application ID or bundle ID.
