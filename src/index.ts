type TFile = { nome: string, size: number, };
const files = getFiles();
let totalSize = 0;

// Scrittura alernativa per eseguire la funzione gogo()
// (async () => {
// 	await Promise.all(
// 		files.map(async (file) => {
// 			// totalSize += await getSize(file);
// 			const fileSize = await getSize(file);
// 			totalSize += fileSize;
// 		})
// 	);
// 	console.log(totalSize);
// })();

async function gogo() {
  await Promise.all(
    files.map(async (file) => {
      // totalSize = totalSize + await getSize(file);
      const fileSize = await getSize(file);
      totalSize += fileSize;
    })
  );
  console.log(totalSize);
};

gogo();


function getFiles(): TFile[] {
	return [
		{
			nome: 'pippo',
			size: 4.
		},
		{
			nome: 'pippo',
			size: 4.
		},
		{
			nome: 'pippo',
			size: 4.
		},
		{
			nome: 'pippo',
			size: 4.
		},
	];
};

function getSize(file: TFile): number {
	return file.size;
};
