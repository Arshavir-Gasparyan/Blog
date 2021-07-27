let lastId = 0;

export default function NewId() {
  lastId = lastId + 1;
  return lastId;
}
