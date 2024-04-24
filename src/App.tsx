/* eslint-disable no-mixed-spaces-and-tabs */

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
    	<div className="px-6 py-3 flex items-center justify-between border-b">
        	<h1 className="text-xl font-bold ">Upload.ai</h1>

        	<div className="flex items-center gap-3">
          		<span className="text-sm text-muted-foreground">Desenvolvido com ❤️</span>
        	</div>
      	</div>

		<main className="flex-1 p-6 flex gap-6">
			<div className="flex flex-col flex-1 gap-4">
				<div className="grid grid-rows-2 gap-4 flex-1"></div>


				<p className="text-sm text-muted-foreground">Lembre-se: você pode utilizar a variável transcription no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.</p>
			</div>

			<aside className="w-80"></aside>
		</main>

    </div>
  )
} 