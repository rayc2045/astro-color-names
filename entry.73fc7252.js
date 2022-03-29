import{c,a as i,b as d,r as m,d as t}from"./chunks/chunk.f36d5148.js";const A=c("/src/components/Card.astro",{modules:[],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[]}),p=i("/src/components/Card.astro","https://astro.build","file:///Users/rayc/GitHub/astro-color-names/"),U=d(async(s,o,r)=>{const a=s.createAstro(p,o,r);a.self=U;const{color:e}=a.props,l=[];for(const n of l)s.styles.add(n);return m`<li${t(`card ${e.name.toLowerCase().replaceAll(" ","")} astro-U4A2UT57`,"class")}>
  <div class="color-display pointer astro-U4A2UT57"${t(`background-color: ${e.hex};`,"style")} title="Click to copy color name"></div>
  <h1 class="pointer astro-U4A2UT57"${t(e.name.length>=19?"font-size: 1.5em; margin: 0.5em;":e.name.length>=17?"font-size: 1.5em; margin: 0.7em;":e.name.length>=15?"font-size: 1.6em; margin: 0.7em;":"","style")} title="Click to copy color name">
    ${e.name}
    <a title="Go to NFT page"${t(e.url.OpenSea,"href")} target="_blank" rel="noreferrer noopener" class="astro-U4A2UT57">
      <img class="eth astro-U4A2UT57" src="/assets/images/ETH.svg" alt="">
    </a>
  </h1>
  <div class="hex-section pointer astro-U4A2UT57" title="Click to copy HEX code">
    <div class="title uppercase astro-U4A2UT57">HEX CODE</div>
    <div class="hex-value astro-U4A2UT57">${e.hex}</div>
  </div>
  <div class="rgb-section pointer astro-U4A2UT57" title="Click to copy RGB value">
    <div class="title uppercase astro-U4A2UT57">RGB VALUE</div>
    <div class="rgb-value astro-U4A2UT57">${e.rgb}</div>
  </div>
</li>

`});export{A as $$metadata,U as default};
