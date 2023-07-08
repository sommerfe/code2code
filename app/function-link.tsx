'use client'

import React, { FunctionComponent } from 'react'
import CodeSnippet from './code-snippet'
import { FunctionLink } from "@/domain/function-link"

const FunktionLinkComponent: FunctionComponent<{ functionLink: FunctionLink }> = ({ functionLink }) => {
  return (
    <div>
        <p>{functionLink.id}</p>
        {functionLink.tags.map(t => <p key={t.id}>{t.name}</p>)}
        {functionLink.languageFunctions.map(fun =>
            <div key={fun.id}>
                <p>{fun.name}</p>
                <p>{fun.language}</p>
                <p>{fun.version}</p>
                <p>{fun.description}</p>
               {fun.examples.map(e => 
                <div key={e.id}>
                    <CodeSnippet language={fun.language} code={e.code}/>
                    <p>{e.comment}</p>
                </div>
                )}
            </div>
        )}
    </div>
)
};

export default FunktionLinkComponent;