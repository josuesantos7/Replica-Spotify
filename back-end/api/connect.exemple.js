import {MongoClient } from "mongodb";

const URL = "mongodb+srv://SEU-USUÁRIO-MONGODB:<db_password>@cluster0.71sk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URL);

const db = client.db("dbSpotify");