export class APIjson
{
  id: string;
  description: string;
  url: string;
  types: string;
  topics: string;
  levels: string;


  constructor(id, description, url, types, topics, levels) {
    this.id = id;
    this.description = description;
    this.url = url;
    this.types = types;
    this.topics = topics;
    this.levels = levels;
  }



}
