import { FileVideo, Upload, Wand2 } from 'lucide-react'/* eslint-disable no-mixed-spaces-and-tabs */
import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Button } from './components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'


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
				<div className="grid grid-rows-2 gap-4 flex-1">
					<Textarea className="resize-none p-4 leading-relaxed" placeholder="Inclua o prompt para a IA..." />
					<Textarea className="resize-none p-4 leading-relaxed" placeholder="Resultado gerado pela Ia..." readOnly />
				
				</div>


				<p className="text-sm text-muted-foreground">Lembre-se: você pode utilizar a variável <code className="text-violet-400 ">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.</p>
			</div>

			<aside className="w-80 space-y-6">
				<form action="space-y-6">
					<label htmlFor="video" 
						   className="border w-full flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5" >
						<FileVideo className="w-4 h-4" />
						Selecione um video
					</label>

					<input type="file" name="video" id="video" accept="video/mp4" className="sr-only"/>	

					<Separator />

					<div className='space-y-1'>
						<Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
						<Textarea id="transcription_prompt" className='min-h-20 leading-relaxed' placeholder='Inclua palavras-chaves mencionadas no video separadas por virgula (,)' />
					</div>

					<Button type="submit" className='w-full'>
						Carregar Vídeo
						<Upload className='w-4 h-4 ml-2' />
					</Button>
				</form>

				<Separator />

				<form className='space-y-6'>
					<div className='spce-y-2'>
						<Label>Pompt</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder='Selecione um prompt...' />
							</SelectTrigger>

							<SelectContent>
								<SelectItem value='title'>Título do YouTube</SelectItem>
								<SelectItem value='description'>Descrição do YouTube</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className='spce-y-2'>
						<Label>Modelo</Label>
						<Select disabled defaultValue='gpt3.5'>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>

							<SelectContent>
								<SelectItem value='gpt3.5'>GPT 3.5 TURBO</SelectItem>
							</SelectContent>
						</Select>
						<span className='block'>
							Você poderá customizar essa opção em breve
						</span>
					</div>

					<Separator />

					<div className='space-y-2'>
						<Label>Temperatura</Label>
						<Slider min={0} max={1} step={0.1} />

						<span className='block text-xs text-muted-foreground italic'>
							Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
						</span>
					</div>

					<Separator />

					<Button type="submit" className='w-full'>
						Executar
						<Wand2 className='w-4 h-4 ml-2' />
					</Button>

				</form>
			</aside>
		</main>

    </div>
  )
} 