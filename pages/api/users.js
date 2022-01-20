const users = [{
  id: 1,
  name: 'matthew 1'
}, {
  id: 2,
  name: 'matthew 2'
}, {
  id: 3,
  name: 'matthew 3'
}, {
  id: 4,
  name: 'matthew 4'
}] 

export default function handler(req, res) {
  res.status(200).json({ users })
}
