const notFoundMiddleware = (req, res) => {
  res.status(400).send('Route do not exits')
}
export default notFoundMiddleware