import express from 'express';

const app = express();

app.use('/', express.static('./dist/client'));
app.use('/assets', express.static('./assets'));

// app.use('/', (req, res) => {
// 	res.send(fs.readFileSync(path.join(__dirname, './index.html'), { encoding: 'utf-8' }));
// });

app.listen(3000, () => {
	console.log('listen on http://localhost:3000');
});
