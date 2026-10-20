import React from 'react';

function Folder() {
  return <svg className="file-folder" viewBox="0 0 24 20" aria-hidden="true"><path d="M1 4a2 2 0 0 1 2-2h6l2 2h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" fill="#d9a84f"/><path d="M1 7h22v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" fill="#f1c76b"/></svg>;
}
export default function MappingDiagram() {
  return <figure className="explorer-illustration" aria-label="Explorer-style illustration of distinct AEM instances mapped to separate desktop folders">
    <div className="product-identity"><img src="/img/product-icon.svg" width="64" height="64" alt=""/><div><strong>DAM Client</strong><span>A Sambafied product · coming soon</span></div></div>
    <div className="explorer-window">
      <div className="explorer-titlebar"><span><Folder/> Work folders</span><span className="window-controls" aria-hidden="true">— □ ×</span></div>
      <div className="explorer-toolbar"><span aria-hidden="true">← &nbsp; → &nbsp; ↑</span><div><Folder/><span>This PC <b aria-hidden="true">›</b> Brand studio</span></div></div>
      <div className="explorer-workspace">
        <div className="explorer-sidebar" aria-hidden="true">
          <div className="explorer-home">⌂ &nbsp; Home</div>
          <p>YOUR AEM INSTANCES</p>
          <div className="mapped-root selected"><img src="/img/product-small.svg" alt="" width="20" height="20"/><span>Brand studio</span></div>
          <div className="mapped-root"><img src="/img/product-small.svg" alt="" width="20" height="20"/><span>Campaign team</span></div>
          <div className="instance-note">One client.<br/>Separate destinations.</div>
        </div>
        <div className="explorer-content">
          <div className="explorer-location"><strong>Brand studio</strong><small>AEM instance A</small></div>
          <div className="file-table" role="table" aria-label="Illustrative assets in the Brand studio folder">
            <div className="file-table-head" role="row"><span role="columnheader">Name</span><span role="columnheader">Type</span></div>
            <div className="file-table-row" role="row"><span role="cell"><Folder/>Brand assets</span><span role="cell">Folder</span></div>
            <div className="file-table-row" role="row"><span role="cell"><Folder/>Campaigns</span><span role="cell">Folder</span></div>
            <div className="file-table-row" role="row"><span role="cell"><span className="file-glyph" aria-hidden="true">PDF</span>Brand guide.pdf</span><span role="cell">PDF</span></div>
            <div className="file-table-row" role="row"><span role="cell"><span className="file-glyph psd" aria-hidden="true">Ps</span>Key visual.psd</span><span role="cell">PSD</span></div>
          </div>
        </div>
      </div>
    </div>
    <figcaption>Illustration with example assets. Concurrent multi-instance folders are the product direction; full workflow qualification is pending.</figcaption>
  </figure>;
}
