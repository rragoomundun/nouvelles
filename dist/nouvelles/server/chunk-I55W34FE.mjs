import './polyfills.server.mjs';
import{e as $}from"./chunk-VVCT4QZE.mjs";var h=$((t,g)=>{"use strict";g.exports=function(a,e){e=e||{},e.listUnicodeChar=e.hasOwnProperty("listUnicodeChar")?e.listUnicodeChar:!1,e.stripListLeaders=e.hasOwnProperty("stripListLeaders")?e.stripListLeaders:!0,e.gfm=e.hasOwnProperty("gfm")?e.gfm:!0,e.useImgAltText=e.hasOwnProperty("useImgAltText")?e.useImgAltText:!0,e.abbr=e.hasOwnProperty("abbr")?e.abbr:!1,e.replaceLinksWithURL=e.hasOwnProperty("replaceLinksWithURL")?e.replaceLinksWithURL:!1,e.htmlTagsToSkip=e.hasOwnProperty("htmlTagsToSkip")?e.htmlTagsToSkip:[];var r=a||"";r=r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,"");try{e.stripListLeaders&&(e.listUnicodeChar?r=r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):r=r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(r=r.replace(/\n={2,}/g,`
`).replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),e.abbr&&(r=r.replace(/\*\[.*\]:.*\n/,"")),r=r.replace(/<[^>]*>/g,"");var l=new RegExp("<[^>]*>","g");if(e.htmlTagsToSkip.length>0){var c="(?!"+e.htmlTagsToSkip.join("|")+")";l=new RegExp("<"+c+"[^>]*>","ig")}r=r.replace(l,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g,e.replaceLinksWithURL?"$2":"$1").replace(/^\s{0,3}>\s?/gm,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} #{0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*]+)(\S)(.*?\S)??\1/g,"$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g,"$1$3$4$5").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/~(.*?)~/g,"$1")}catch(s){return console.error(s),a}return r}});export{h as a};
