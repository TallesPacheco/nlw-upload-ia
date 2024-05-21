import { FileVideo, Upload } from 'lucide-react';/* eslint-disable no-mixed-spaces-and-tabs */
import { Separator } from './ui/separator';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ChangeEvent, useState, useMemo, useRef, FormEvent } from 'react';

export function VideoInputForm(){

    const [VideoFile, setVideoFile] = useState<File | null>(null)
    const promptInputRef =  useRef<HTMLTextAreaElement>(null)

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>){
        const { files } = event.currentTarget

        if(!files){
            return
        }

        const selectedFile = files[0]
        setVideoFile(selectedFile)
    }

    function handleUploadVideo(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const promp = promptInputRef.current?.value
        
        if(!VideoFile){
            return
        }


    }

    const previewURL = useMemo(() => {
        if(!VideoFile){
            return
        }

        return URL.createObjectURL(VideoFile)

    }, [VideoFile])

    return(
        <form action="space-y-6">
            <label htmlFor="video" 
                    className="relative border w-full flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5" >
                {previewURL ? (
                    <video src={previewURL} controls={false} className='pointer-events-none absolute inset-0' />
                ) : (
                    <>
                        <FileVideo className="w-4 h-4" />
                        Selecione um video
                    </>
                )}
               
            </label>

            <input type="file" name="video" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected}/>	

            <Separator />

            <div className='space-y-1'>
                <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
                <Textarea id="transcription_prompt" 
                ref={promptInputRef}
                className='min-h-20 leading-relaxed' 
                placeholder='Inclua palavras-chaves mencionadas no video separadas por virgula (,)' />
            </div>

            <Button type="submit" className='w-full'>
                Carregar Vídeo
                <Upload className='w-4 h-4 ml-2' />
            </Button>
        </form>

    )
}