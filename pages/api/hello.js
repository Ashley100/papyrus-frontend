// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const user = {
  email: 'tor20099@mail.ru',
  password: 'ddDDww22',
}

export default (req, res) => {
  console.log(req);
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
