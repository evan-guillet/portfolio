module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/portfolio/' // Remplacez par le nom de votre repo
      : '/',
}
