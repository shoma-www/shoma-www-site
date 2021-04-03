import React, { ComponentType } from 'react'

export default function Blog({ Page }: { Page: ComponentType<any> & { meta: { title: string}} }) {
  return (
    <div>
      <div className="content">
        <h1>BlogのContents</h1>
        {Page && <Page />}
      </div>
    </div>
  )
}