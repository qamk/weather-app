(()=>{"use strict";const e={ulGenerator:(e,t,n)=>{let r=document.createElement("ul");r.id=n;for(let e=0;e<t;e++){let t=document.createElement("li");t.setAttribute("data-id",e),r.appendChild(t)}return e.appendChild(r),r},elementGenerator:({root:e,elementName:t,classes:n=[],attributes:r={}}={})=>{if(!t)return;let a=document.createElement(t);var o;return 0===n.length||((e,t)=>{for(let n of t)e.classList.add(n)})(a,n),o=r,0===Object.keys(o)||((e,t)=>{for(let[n,r]of Object.entries(t))try{e[n]=r}catch(e){console.log(e)}})(a,r),e.appendChild(a),a}},t={toCelsius:e=>{let t=[];for(let n of e)n[1]=Math.round((n[1]-32)*(5/9)),t.push(n);return t},toFahrenheit:e=>{let t=[];for(let n of e)n[1]=Math.round(1.8*+n[1]+32),t.push(n);return t},units:e=>({f:"&deg F",c:"&deg C",wind:"k/h"}[e])};(()=>{const n=document.getElementById("content"),r=((e,t)=>{let n;return{drawPage:()=>{0===t.childElementCount||t.removeChild(t.lastElementChild);const r=e.elementGenerator({root:t,elementName:"section",classes:[]}),a=e.elementGenerator({root:r,elementName:"article",classes:[]}),o=(e.elementGenerator({root:a,elementName:"input",classes:[],attributes:{placeholder:"e.g. london, uk"}}),e.elementGenerator({root:a,elementName:"button",classes:[],attributes:{textContent:"Submit Query"}}));n=[o]},getInteractive:()=>n||[]}})(e,n),a=((e,t)=>{let n;return{drawPage:()=>{0===t.childElementCount||t.removeChild(t.lastElementChild);const r=e.elementGenerator({root:t,elementName:"section",classes:[]}),a=(e.elementGenerator({root:r,elementName:"div",classes:[]}),e.elementGenerator({root:r,elementName:"div",classes:[]})),o=e.elementGenerator({root:a,elementName:"div",classes:[]}),l=e.elementGenerator({root:o,elementName:"div",classes:[]}),s=e.elementGenerator({root:l,elementName:"button",classes:[],attributes:{textContent:"Fahrenheit",id:"f"}}),i=e.elementGenerator({root:l,elementName:"button",classes:[],attributes:{textContent:"Celsius",id:"c"}}),c=e.elementGenerator({root:o,elementName:"div",classes:[]});e.ulGenerator(c,4,"data_list"),n=[s,i]},getInteractive:()=>n||[]}})(e,n),o=(()=>{let e,t="appid=97aa6c26c2af40cfea026c9e196de08b";return{fetchHandler:async(...n)=>{const r="q="+n.join(",");try{const n=await(async([e,n])=>{let r=[e,n,t].join("&");return(await fetch("https://api.openweathermap.org/data/2.5/weather?"+r,{mode:"cors"})).json()})([r,"units=metric"]);if("404"==n.cod)throw"Invalid query";e=n}catch(e){return console.log("error"),new Error(e)}return(()=>{const t=e.weather[0],n=e.main,r=e.wind;return{weather:{description:t.description},temperature:{main:n.temp,feels:n.feels_like,max:n.temp_max,min:n.temp_min},wind:{speed:r.speed}}})()}}})(),l=t;let s,i,c;const m=(e,t)=>{e.addEventListener("click",t)},d=e=>{const t={main:"Temperature",min:"Minimum Temperature",max:"Maximum Temperature",feels:"Feels Like",description:"Forecast for today is",speed:"Wind speed"};let n=[];for(let[r,a]of Object.entries(e)){const e=t[r];n.push([e,a])}return console.log("entries",n),n},u=e=>{const t={c:l.toCelsius,f:l.toFahrenheit},n=e.target.id,r=i.splice(0,4),a=t[n](r);((e,t)=>{for(let n of e){let e=+n.dataset.id;n.innerHTML=t[e].join(": ")}i=t})(document.getElementById("data_list").childNodes,a.concat(i))},h=async()=>{let e=document.querySelector("input").value;try{if(s=await o.fetchHandler(e),s.message)throw s}catch(e){return alert(e)}p(a),(()=>{let e=s.temperature,t=s.weather,n=s.wind;t=d(t),c=d(n),i=d(e)})()},p=(e=r)=>{let t=e===r?h:u;(e=>{e.drawPage(n)})(e),((e,t)=>{const n=e.getInteractive();for(let e of n)m(e,t)})(e,t)};return{run:p}})().run()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFBQSxNQStDQSxFQUpTLENBQUNBLFlBWlksQ0FBQ0MsRUFBTUMsRUFBWUMsS0FDckMsSUFBSUMsRUFBS0MsU0FBU0MsY0FBYyxNQUNoQ0YsRUFBR0QsR0FBS0EsRUFDUixJQUFLLElBQUlJLEVBQUUsRUFBR0EsRUFBRUwsRUFBWUssSUFBSyxDQUMvQixJQUFJQyxFQUFXSCxTQUFTQyxjQUFjLE1BQ3RDRSxFQUFTQyxhQUFhLFVBQVdGLEdBQ2pDSCxFQUFHTSxZQUFZRixHQUdqQixPQURBUCxFQUFLUyxZQUFZTixHQUNWQSxHQUdZTyxpQkFyQ0ksRUFBRVYsS0FBQUEsRUFBTVcsWUFBQUEsRUFBYUMsUUFBQUEsRUFBVSxHQUFJQyxXQUFBQSxFQUFhLElBQU0sTUFDN0UsSUFBS0YsRUFBZSxPQUNwQixJQUFJRyxFQUFVVixTQUFTQyxjQUFjTSxHQUpwQixJQUZESSxFQVVoQixPQVJ5QyxJQUs5QkgsRUFMbUJJLFFBV1AsRUFBQ0YsRUFBU0YsS0FDakMsSUFBSyxJQUFJSyxLQUFTTCxFQUNoQkUsRUFBUUksVUFBVUMsSUFBSUYsSUFSREcsQ0FBaUJOLEVBQVNGLEdBUGpDRyxFQVFQRixFQVJvQyxJQUFyQlEsT0FBT0MsS0FBS1AsSUFtQlYsRUFBQ0QsRUFBU0QsS0FDcEMsSUFBSyxJQUFLVSxFQUFVQyxLQUFjSCxPQUFPSSxRQUFRWixHQUMvQyxJQUNBQyxFQUFRUyxHQUFZQyxFQUNsQixNQUFPRSxHQUNQQyxRQUFRQyxJQUFJRixLQWhCUUcsQ0FBb0JmLEVBQVNELEdBQ3JEYixFQUFLUyxZQUFZSyxHQUNWQSxJQ2VYLEVBSFMsQ0FBRWdCLFVBdkJVQyxJQUNqQixJQUFJQyxFQUFZLEdBQ2hCLElBQUssSUFBSUMsS0FBUUYsRUFDZkUsRUFBSyxHQUFLQyxLQUFLQyxPQUFPRixFQUFLLEdBQUssS0FBTyxFQUFJLElBQzNDRCxFQUFVSSxLQUFLSCxHQUVqQixPQUFPRCxHQWlCV0ssYUFkRU4sSUFDcEIsSUFBSUMsRUFBWSxHQUNoQixJQUFLLElBQUlDLEtBQVFGLEVBQ2ZFLEVBQUssR0FBS0MsS0FBS0MsTUFBa0IsS0FBVkYsRUFBSyxHQUFnQixJQUM1Q0QsRUFBVUksS0FBS0gsR0FFakIsT0FBT0QsR0FReUJNLE1BTG5CQyxJQUNDLENBQUVDLEVBQUcsU0FBVUMsRUFBRyxTQUFVQyxLQUFNLE9BQ25DSCxLQ2ZKLE1BQ1gsTUFBTXZDLEVBQU9JLFNBQVN1QyxlQUFlLFdBQy9CQyxFQ1JXLEVBQUNDLEVBQWU3QyxLQUNqQyxJQUFJOEMsRUErQkosTUFBTyxDQUFFQyxTQTlCUSxLQUNhLElBQTNCL0MsRUFBS2dELG1CQUE0QmhELEVBQUtpRCxZQUFZakQsRUFBS2tELGtCQUN4RCxNQUFNQyxFQUFVTixFQUFjbkMsaUJBQWlCLENBQzdDVixLQUFNQSxFQUNOVyxZQUFhLFVBQ2JDLFFBQVMsS0FFTHdDLEVBQVVQLEVBQWNuQyxpQkFBaUIsQ0FDN0NWLEtBQU1tRCxFQUNOeEMsWUFBYSxVQUNiQyxRQUFTLEtBUUx5QyxHQU5RUixFQUFjbkMsaUJBQWlCLENBQzNDVixLQUFNb0QsRUFDTnpDLFlBQWEsUUFDYkMsUUFBUyxHQUNUQyxXQUFZLENBQUN5QyxZQUFhLHFCQUViVCxFQUFjbkMsaUJBQWlCLENBQzVDVixLQUFNb0QsRUFDTnpDLFlBQWEsU0FDYkMsUUFBUyxHQUNUQyxXQUFZLENBQUMwQyxZQUFhLG1CQUc1QlQsRUFBYyxDQUFDTyxJQUtFRyxlQUZJLElBQU1WLEdBQWUsS0R0QjdCLENBQVcsRUFBWTlDLEdBQ2hDeUQsRUVUWSxFQUFDWixFQUFlN0MsS0FDaEMsSUFBSThDLEVBcUROLE1BQU8sQ0FBRUMsU0FuRFEsS0FDYSxJQUEzQi9DLEVBQUtnRCxtQkFBNEJoRCxFQUFLaUQsWUFBWWpELEVBQUtrRCxrQkFDeEQsTUFBTUMsRUFBVU4sRUFBY25DLGlCQUFpQixDQUM3Q1YsS0FBTUEsRUFDTlcsWUFBYSxVQUNiQyxRQUFTLEtBT0w4QyxHQUxXYixFQUFjbkMsaUJBQWlCLENBQzlDVixLQUFNbUQsRUFDTnhDLFlBQWEsTUFDYkMsUUFBUyxLQUVLaUMsRUFBY25DLGlCQUFpQixDQUM3Q1YsS0FBTW1ELEVBQ054QyxZQUFhLE1BQ2JDLFFBQVMsTUFFTHdDLEVBQVVQLEVBQWNuQyxpQkFBaUIsQ0FDN0NWLEtBQU0wRCxFQUNOL0MsWUFBYSxNQUNiQyxRQUFTLEtBRUwrQyxFQUFZZCxFQUFjbkMsaUJBQWlCLENBQzdDVixLQUFNb0QsRUFDTnpDLFlBQWEsTUFDYkMsUUFBUyxLQUVQZ0QsRUFBVWYsRUFBY25DLGlCQUFpQixDQUMzQ1YsS0FBTTJELEVBQ05oRCxZQUFhLFNBQ2JDLFFBQVMsR0FDVEMsV0FBWSxDQUFDMEMsWUFBYSxhQUFjckQsR0FBSSxPQUUxQzJELEVBQVVoQixFQUFjbkMsaUJBQWlCLENBQzNDVixLQUFNMkQsRUFDTmhELFlBQWEsU0FDYkMsUUFBUyxHQUNUQyxXQUFZLENBQUMwQyxZQUFhLFVBQVdyRCxHQUFJLE9BRXZDNEQsRUFBVWpCLEVBQWNuQyxpQkFBaUIsQ0FDN0NWLEtBQU1vRCxFQUNOekMsWUFBYSxNQUNiQyxRQUFTLEtBRU1pQyxFQUFjOUMsWUFBWStELEVBQVMsRUFBRyxhQUV2RGhCLEVBQWMsQ0FBQ2MsRUFBU0MsSUFLUEwsZUFGSSxJQUFNVixHQUFlLEtGM0M1QixDQUFZLEVBQVk5QyxHQUNsQytELEVHVmUsTUFDckIsSUFFSUMsRUFGQUMsRUFBUyx5Q0E0Q2IsTUFBTyxDQUFFQyxhQWRZQyxTQUFVQyxLQUM3QixNQUNNQyxFQUFXLEtBQU9ELEVBQWVFLEtBQUssS0FDNUMsSUFDRSxNQUFNQyxPQTlCU0osUUFBUUUsRUFBVS9CLE1BQ25DLElBQUlrQyxFQUFXLENBQUNILEVBQVUvQixFQUFPMkIsR0FBUUssS0FBSyxLQUU5QyxhQURpQkcsTUFMVCxtREFLcUJELEVBQVUsQ0FBQ0UsS0FBTSxVQUNsQ0MsUUEyQlNDLENBQVcsQ0FBQ1AsRUFIbkIsaUJBSVosR0FBZ0IsT0FBWkUsRUFBS00sSUFBZ0IsS0FBTSxnQkFDL0JiLEVBQVVPLEVBQ1YsTUFBT08sR0FFUCxPQURBbkQsUUFBUUMsSUFBSSxTQUNMLElBQUltRCxNQUFNRCxHQUVuQixNQS9Ca0IsTUFDbEIsTUFBTUUsRUFBVWhCLEVBQVFnQixRQUFRLEdBQzFCQyxFQUFjakIsRUFBUWtCLEtBQ3RCeEMsRUFBT3NCLEVBQVF0QixLQWNyQixNQWJnQixDQUNkc0MsUUFBUyxDQUNQRyxZQUFhSCxFQUFRRyxhQUV2QkYsWUFBYSxDQUNYQyxLQUFNRCxFQUFZaEQsS0FBTW1ELE1BQU9ILEVBQVlJLFdBQzNDQyxJQUFLTCxFQUFZTSxTQUFVQyxJQUFLUCxFQUFZUSxVQUU5Qy9DLEtBQU0sQ0FDSmdELE1BQU9oRCxFQUFLZ0QsU0FrQlRDLE1IaENTLEdBQ1pDLEVBQWlCLEVBQ3ZCLElBQUlyQixFQUFNc0IsRUFBb0JDLEVBRTlCLE1BQU1DLEVBQVUsQ0FBQ2pGLEVBQVNrRixLQUN4QmxGLEVBQVFtRixpQkFBaUIsUUFBU0QsSUFnQzlCRSxFQUFpQm5GLElBQ3JCLE1BQU1vRixFQUFZLENBQ2hCakIsS0FBTSxjQUNOTSxJQUFLLHNCQUNMRixJQUFLLHNCQUNMRixNQUFPLGFBQ1BELFlBQWEsd0JBQ2JPLE1BQU8sY0FHVCxJQUFJakUsRUFBVSxHQUNkLElBQUssSUFBSzJFLEVBQU9DLEtBQVVoRixPQUFPSSxRQUFRVixHQUFNLENBQzlDLE1BQU11RixFQUFXSCxFQUFVQyxHQUMzQjNFLEVBQVFXLEtBQUssQ0FBQ2tFLEVBQVVELElBRzFCLE9BREExRSxRQUFRQyxJQUFJLFVBQVdILEdBQ2hCQSxHQUdIOEUsRUFBZUMsSUFDbkIsTUFBTUMsRUFBVSxDQUFFaEUsRUFBR21ELEVBQWU5RCxVQUFXVSxFQUFHb0QsRUFBZXZELGNBQzNEcUUsRUFBU0YsRUFBRUcsT0FBT3pHLEdBQ2xCMEcsRUFBb0JmLEVBQVVnQixPQUFPLEVBQUcsR0FDeENDLEVBQWtCTCxFQUFRQyxHQUFRRSxHQTNDckIsRUFBQ0csRUFBVUMsS0FDOUIsSUFBTSxJQUFJQyxLQUFRRixFQUFXLENBQzNCLElBQUlHLEdBQVNELEVBQUtFLFFBQVFqSCxHQUMxQitHLEVBQUtHLFVBQVlKLEVBQUtFLEdBQU81QyxLQUFLLE1BRXBDdUIsRUFBWW1CLEdBeUNaSyxDQXJDYWpILFNBQVN1QyxlQUFlLGFBQ3pCMkUsV0FtQ0dSLEVBQWdCUyxPQUFPMUIsS0FhbEMyQixFQUFXckQsVUFDZixJQUFJc0QsRUEvRFlySCxTQUFTc0gsY0FBYyxTQUN4QnJCLE1BK0RmLElBRUUsR0FEQTlCLFFBQWFSLEVBQVVHLGFBQWF1RCxHQUNoQ2xELEVBQUtvRCxRQUFTLE1BQU1wRCxFQUN4QixNQUFPTyxHQUNQLE9BQU84QyxNQUFNOUMsR0FFZitDLEVBQUlwRSxHQWpCZ0IsTUFDcEIsSUFBSXdCLEVBQWNWLEVBQUtVLFlBQ25CRCxFQUFVVCxFQUFLUyxRQUNmdEMsRUFBTzZCLEVBQUs3QixLQUNoQnNDLEVBQVVrQixFQUFjbEIsR0FDeEJjLEVBQVlJLEVBQWN4RCxHQUMxQm1ELEVBQVlLLEVBQWNqQixJQVkxQjZDLElBR0lELEVBQU0sQ0FBQ0UsRUFBT25GLEtBQ2xCLElBQUlvRCxFQUFXK0IsSUFBU25GLEVBQVM0RSxFQUFXakIsRUFoRjdCLENBQUN3QixJQUNoQkEsRUFBS2hGLFNBQVMvQyxJQWdGZGdJLENBQVNELEdBM0RpQixFQUFDQSxFQUFNL0IsS0FDakMsTUFBTWlDLEVBQVFGLEVBQUt2RSxpQkFDbkIsSUFBTSxJQUFJMEUsS0FBUUQsRUFDaEJsQyxFQUFRbUMsRUFBTWxDLElBeURoQm1DLENBQW9CSixFQUFNL0IsSUFHNUIsTUFBTyxDQUFFNkIsSUFBQUEsSUFqR0UsR0FxR1JBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VuaXRzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb21DcmVhdG9yID0gKCgpID0+IHtcblxuICBjb25zdCBlbXB0eU9iaiA9IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikgPT09IDA7XG5cbiAgY29uc3QgZW1wdHlBcnJheSA9IChhcnIpID0+IGFyci5sZW5ndGggPT09IDA7IFxuXG4gIGNvbnN0IGVsZW1lbnRHZW5lcmF0b3IgPSAoe3Jvb3QsIGVsZW1lbnROYW1lLCBjbGFzc2VzID0gW10sIGF0dHJpYnV0ZXMgPSB7fX0gPSB7fSkgPT4ge1xuICAgIGlmICghZWxlbWVudE5hbWUpIHsgcmV0dXJuIH0gLy8gcmVxdWlyZSBhbiBlbGVtZW50XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICBlbXB0eUFycmF5KGNsYXNzZXMpIHx8IGltYnVlV2l0aENsYXNzZXMoZWxlbWVudCwgY2xhc3Nlcyk7XG4gICAgZW1wdHlPYmooYXR0cmlidXRlcykgfHwgaW1idWVXaXRoQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKTsgLy8gT25seSBjYWxsIGlmIGF0dHJpYnV0ZXMgYXJlIHN1cHBsaWVkXG4gICAgcm9vdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGltYnVlV2l0aENsYXNzZXMgPSAoZWxlbWVudCwgY2xhc3NlcykgPT4ge1xuICAgIGZvciAobGV0IGtsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW1idWVXaXRoQXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgZm9yIChsZXQgW2F0dHJOYW1lLCBhdHRyVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICB0cnkge1xuICAgICAgZWxlbWVudFthdHRyTmFtZV0gPSBhdHRyVmFsdWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1bEdlbmVyYXRvciA9IChyb290LCBjaGlsZENvdW50LCBpZCkgPT4ge1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuaWQgPSBpZDtcbiAgICBmb3IgKGxldCBpPTA7IGk8Y2hpbGRDb3VudDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQodWwpO1xuICAgIHJldHVybiB1bDtcbiAgfVxuXG4gIHJldHVybiB7dWxHZW5lcmF0b3IsIGVsZW1lbnRHZW5lcmF0b3J9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNyZWF0b3I7IiwiY29uc3QgdW5pdEhhbmRsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b0NlbHNpdXMgPSAoYXJncykgPT4ge1xuICAgIGxldCBjb252ZXJ0ZWQgPSBbXTtcbiAgICBmb3IgKGxldCB0ZW1wIG9mIGFyZ3MpIHtcbiAgICAgIHRlbXBbMV0gPSBNYXRoLnJvdW5kKCh0ZW1wWzFdIC0gMzIpICogKDUgLyA5KSk7XG4gICAgICBjb252ZXJ0ZWQucHVzaCh0ZW1wKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRlZDtcbiAgfVxuXG4gIGNvbnN0IHRvRmFocmVuaGVpdCA9IChhcmdzKSA9PiB7XG4gICAgbGV0IGNvbnZlcnRlZCA9IFtdO1xuICAgIGZvciAobGV0IHRlbXAgb2YgYXJncykge1xuICAgICAgdGVtcFsxXSA9IE1hdGgucm91bmQoKCt0ZW1wWzFdICogKDkgLyA1KSkgKyAzMik7XG4gICAgICBjb252ZXJ0ZWQucHVzaCh0ZW1wKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRlZDtcbiAgfVxuXG4gIGNvbnN0IHVuaXRzID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IHVuaXRzID0geyBmOiBcIiZkZWcgRlwiLCBjOiBcIiZkZWcgQ1wiLCB3aW5kOiAnay9oJyB9O1xuICAgIHJldHVybiB1bml0c1trZXldO1xuICB9XG5cbiAgcmV0dXJuIHsgdG9DZWxzaXVzLCB0b0ZhaHJlbmhlaXQsIHVuaXRzIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRIYW5kbGVyOyIsImltcG9ydCBkb21DcmVhdG9yIGZyb20gXCIuL2RvbUNyZWF0b3JcIjtcbmltcG9ydCBXZWF0aGVyZmV0Y2hlciBmcm9tIFwiLi9mZXRjaFwiO1xuaW1wb3J0IHJlc3VsdHNQYWdlIGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCBzZWFyY2hQYWdlIGZyb20gXCIuL3NlYXJjaFwiO1xuaW1wb3J0IHVuaXRIYW5kbGVyIGZyb20gXCIuL3VuaXRzSGFuZGxlclwiO1xuXG5jb25zdCBtYWluID0gKCgpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IHNlYXJjaCA9IHNlYXJjaFBhZ2UoZG9tQ3JlYXRvciwgcm9vdCk7XG4gIGNvbnN0IHJlc3VsdHMgPSByZXN1bHRzUGFnZShkb21DcmVhdG9yLCByb290KTtcbiAgY29uc3QgYXBpQ2FsbGVyID0gV2VhdGhlcmZldGNoZXIoKTtcbiAgY29uc3QgdW5pdEhhbmRsZXJPYmogPSB1bml0SGFuZGxlcjtcbiAgbGV0IGRhdGEsIGxpc3RJdGVtcywgd2VhdGhlciwgd2luZFNwZWVkO1xuICBcbiAgY29uc3Qgb25DbGljayA9IChlbGVtZW50LCBjYWxsYmFjaykgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIGNvbnN0IGNhbGxEcmF3ID0gKHBhZ2UpID0+IHtcbiAgICBwYWdlLmRyYXdQYWdlKHJvb3QpO1xuICB9XG4gIFxuICBjb25zdCBncmFiSW5uZXJIVE1MID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgY29uc3Qgc2V0SW5uZXJIVE1MID0gKG5vZGVMaXN0LCB0ZXh0KSA9PiB7XG4gICAgZm9yICggbGV0IG5vZGUgb2Ygbm9kZUxpc3QgKSB7XG4gICAgICBsZXQgaW5kZXggPSArbm9kZS5kYXRhc2V0LmlkO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0W2luZGV4XS5qb2luKCc6ICcpO1xuICAgIH1cbiAgICBsaXN0SXRlbXMgPSB0ZXh0O1xuICB9XG5cbiAgY29uc3QgZGF0YUxpc3RDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFfbGlzdCcpO1xuICAgIHJldHVybiBsaXN0LmNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGNvbnN0IHNldEludGVyYWN0aXZlRXZlbnQgPSAocGFnZSwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IHBhZ2UuZ2V0SW50ZXJhY3RpdmUoKTtcbiAgICBmb3IgKCBsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgICAgb25DbGljayhpdGVtLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbGFiZWxlZFZhbHVlcyA9IChvYmopID0+IHtcbiAgICBjb25zdCBuZXdMYWJsZXMgPSB7XG4gICAgICBtYWluOiAnVGVtcGVyYXR1cmUnLFxuICAgICAgbWluOiAnTWluaW11bSBUZW1wZXJhdHVyZScsXG4gICAgICBtYXg6ICdNYXhpbXVtIFRlbXBlcmF0dXJlJyxcbiAgICAgIGZlZWxzOiAnRmVlbHMgTGlrZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmVjYXN0IGZvciB0b2RheSBpcycsXG4gICAgICBzcGVlZDogJ1dpbmQgc3BlZWQnXG4gICAgfVxuXG4gICAgbGV0IGVudHJpZXMgPSBbXVxuICAgIGZvciAobGV0IFtsYWJlbCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgIGNvbnN0IG5ld0xhYmVsID0gbmV3TGFibGVzW2xhYmVsXTtcbiAgICAgIGVudHJpZXMucHVzaChbbmV3TGFiZWwsIHZhbHVlXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdlbnRyaWVzJywgZW50cmllcylcbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVVuaXRzID0gKGUpID0+IHtcbiAgICBjb25zdCBjb252ZXJ0ID0geyBjOiB1bml0SGFuZGxlck9iai50b0NlbHNpdXMsIGY6IHVuaXRIYW5kbGVyT2JqLnRvRmFocmVuaGVpdCB9O1xuICAgIGNvbnN0IHRvVW5pdCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWVzID0gbGlzdEl0ZW1zLnNwbGljZSgwLCA0KTtcbiAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZXMgPSBjb252ZXJ0W3RvVW5pdF0odGVtcGVyYXR1cmVWYWx1ZXMpO1xuICAgIGNvbnN0IGxpc3RDaGlsZHJlbiA9IGRhdGFMaXN0Q2hpbGRyZW4oKTtcbiAgICBsZXQgbGlzdFRleHQgPSBjb252ZXJ0ZWRWYWx1ZXMuY29uY2F0KGxpc3RJdGVtcyk7XG4gICAgc2V0SW5uZXJIVE1MKGxpc3RDaGlsZHJlbiwgbGlzdFRleHQpO1xuICB9XG5cbiAgY29uc3Qgc2V0RGF0YVZhbHVlcyA9ICgpID0+IHtcbiAgICBsZXQgdGVtcGVyYXR1cmUgPSBkYXRhLnRlbXBlcmF0dXJlO1xuICAgIGxldCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyO1xuICAgIGxldCB3aW5kID0gZGF0YS53aW5kO1xuICAgIHdlYXRoZXIgPSBsYWJlbGVkVmFsdWVzKHdlYXRoZXIpO1xuICAgIHdpbmRTcGVlZCA9IGxhYmVsZWRWYWx1ZXMod2luZCk7XG4gICAgbGlzdEl0ZW1zID0gbGFiZWxlZFZhbHVlcyh0ZW1wZXJhdHVyZSk7XG4gIH1cblxuICBjb25zdCBtYWtlQ2FsbCA9IGFzeW5jKCkgPT4ge1xuICAgIGxldCBxdWVyeSA9IGdyYWJJbm5lckhUTUwoKTtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGF3YWl0IGFwaUNhbGxlci5mZXRjaEhhbmRsZXIocXVlcnkpO1xuICAgICAgaWYgKGRhdGEubWVzc2FnZSkgdGhyb3cgZGF0YTsgLy8gVGhyb3cgaXQgb3V0IHRoZSB3aW5kb3cuLi5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yKVxuICAgIH1cbiAgICBydW4ocmVzdWx0cyk7XG4gICAgc2V0RGF0YVZhbHVlcygpO1xuICB9XG5cbiAgY29uc3QgcnVuID0gKHBhZ2UgPSBzZWFyY2gpID0+IHtcbiAgICBsZXQgY2FsbGJhY2sgPSBwYWdlID09PSBzZWFyY2ggPyBtYWtlQ2FsbCA6IHRvZ2dsZVVuaXRzO1xuICAgIGNhbGxEcmF3KHBhZ2UpO1xuICAgIHNldEludGVyYWN0aXZlRXZlbnQocGFnZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHsgcnVuIH1cblxufSkoKTtcblxubWFpbi5ydW4oKSIsImNvbnN0IHNlYXJjaFBhZ2UgPSAoZG9tQ3JlYXRvck9iaiwgcm9vdCkgPT4ge1xuICBsZXQgaW50ZXJhY3RpdmU7XG4gIGNvbnN0IGRyYXdQYWdlID0gKCkgPT4ge1xuICAgIChyb290LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB8fCByb290LnJlbW92ZUNoaWxkKHJvb3QubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICByb290OiByb290LFxuICAgICAgZWxlbWVudE5hbWU6ICdzZWN0aW9uJyxcbiAgICAgIGNsYXNzZXM6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICByb290OiBzZWN0aW9uLFxuICAgICAgZWxlbWVudE5hbWU6ICdhcnRpY2xlJyxcbiAgICAgIGNsYXNzZXM6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgaW5wdXQgPSBkb21DcmVhdG9yT2JqLmVsZW1lbnRHZW5lcmF0b3Ioe1xuICAgICAgcm9vdDogYXJ0aWNsZSxcbiAgICAgIGVsZW1lbnROYW1lOiAnaW5wdXQnLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgICBhdHRyaWJ1dGVzOiB7cGxhY2Vob2xkZXI6ICdlLmcuIGxvbmRvbiwgdWsnfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICByb290OiBhcnRpY2xlLFxuICAgICAgZWxlbWVudE5hbWU6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgICBhdHRyaWJ1dGVzOiB7dGV4dENvbnRlbnQ6ICdTdWJtaXQgUXVlcnknfVxuICAgIH0pO1xuXG4gICAgaW50ZXJhY3RpdmUgPSBbYnV0dG9uXVxuICB9XG5cbiAgY29uc3QgZ2V0SW50ZXJhY3RpdmUgPSAoKSA9PiBpbnRlcmFjdGl2ZSB8fCBbXTtcblxuICByZXR1cm4geyBkcmF3UGFnZSwgZ2V0SW50ZXJhY3RpdmUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUGFnZTsiLCJjb25zdCByZXN1bHRzUGFnZSA9IChkb21DcmVhdG9yT2JqLCByb290KSA9PiB7XG4gICAgbGV0IGludGVyYWN0aXZlO1xuICBcbiAgY29uc3QgZHJhd1BhZ2UgPSAoKSA9PiB7XG4gICAgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHx8IHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9tQ3JlYXRvck9iai5lbGVtZW50R2VuZXJhdG9yKHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICBlbGVtZW50TmFtZTogJ3NlY3Rpb24nLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb21DcmVhdG9yT2JqLmVsZW1lbnRHZW5lcmF0b3Ioe1xuICAgICAgcm9vdDogc2VjdGlvbixcbiAgICAgIGVsZW1lbnROYW1lOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICByb290OiBzZWN0aW9uLFxuICAgICAgZWxlbWVudE5hbWU6ICdkaXYnLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgfSk7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICByb290OiBjYXJkRGl2LFxuICAgICAgZWxlbWVudE5hbWU6ICdkaXYnLFxuICAgICAgY2xhc3NlczogW10sXG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9tQ3JlYXRvck9iai5lbGVtZW50R2VuZXJhdG9yKHtcbiAgICAgICAgcm9vdDogYXJ0aWNsZSxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbXSxcbiAgICAgIH0pO1xuICAgIGNvbnN0IGZCdXR0b24gPSBkb21DcmVhdG9yT2JqLmVsZW1lbnRHZW5lcmF0b3Ioe1xuICAgICAgICByb290OiBidXR0b25EaXYsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NlczogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt0ZXh0Q29udGVudDogJ0ZhaHJlbmhlaXQnLCBpZDogJ2YnfVxuICAgICAgfSk7XG4gICAgY29uc3QgY0J1dHRvbiA9IGRvbUNyZWF0b3JPYmouZWxlbWVudEdlbmVyYXRvcih7XG4gICAgICAgIHJvb3Q6IGJ1dHRvbkRpdixcbiAgICAgICAgZWxlbWVudE5hbWU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc2VzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczoge3RleHRDb250ZW50OiAnQ2Vsc2l1cycsIGlkOiAnYyd9XG4gICAgICB9KTtcbiAgICBjb25zdCBkYXRhRGl2ID0gZG9tQ3JlYXRvck9iai5lbGVtZW50R2VuZXJhdG9yKHtcbiAgICAgIHJvb3Q6IGFydGljbGUsXG4gICAgICBlbGVtZW50TmFtZTogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbXSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhTGlzdCA9IGRvbUNyZWF0b3JPYmoudWxHZW5lcmF0b3IoZGF0YURpdiwgNCwgJ2RhdGFfbGlzdCcpO1xuICAgIFxuICAgIGludGVyYWN0aXZlID0gW2ZCdXR0b24sIGNCdXR0b25dO1xuICB9XG5cbiAgY29uc3QgZ2V0SW50ZXJhY3RpdmUgPSAoKSA9PiBpbnRlcmFjdGl2ZSB8fCBbXTtcblxuICByZXR1cm4geyBkcmF3UGFnZSwgZ2V0SW50ZXJhY3RpdmUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0c1BhZ2U7IiwiY29uc3QgV2VhdGhlcmZldGNoZXIgPSAoKSA9PiB7XG4gIGxldCBhcGlLZXkgPSAnYXBwaWQ9OTdhYTZjMjZjMmFmNDBjZmVhMDI2YzllMTk2ZGUwOGInO1xuICBsZXQgdXJpID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyc7XG4gIGxldCBkYXRhT2JqO1xuXG4gIGNvbnN0IF9mZXRjaERhdGEgPSBhc3luYyAoW2xvY2F0aW9uLCB1bml0c10pID0+IHtcbiAgICBsZXQgYXBpUXVlcnkgPSBbbG9jYXRpb24sIHVuaXRzLCBhcGlLZXldLmpvaW4oJyYnKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKHVyaSArIGFwaVF1ZXJ5LCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICB9XG4gIFxuICBjb25zdCBfc3VtbWVkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gZGF0YU9iai53ZWF0aGVyWzBdO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF0YU9iai5tYWluO1xuICAgIGNvbnN0IHdpbmQgPSBkYXRhT2JqLndpbmQ7XG4gICAgY29uc3Qgc3VtbWFyeSA9IHtcbiAgICAgIHdlYXRoZXI6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IHdlYXRoZXIuZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgICAgbWFpbjogdGVtcGVyYXR1cmUudGVtcCwgZmVlbHM6IHRlbXBlcmF0dXJlLmZlZWxzX2xpa2UsXG4gICAgICAgIG1heDogdGVtcGVyYXR1cmUudGVtcF9tYXgsIG1pbjogdGVtcGVyYXR1cmUudGVtcF9taW5cbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiB3aW5kLnNwZWVkXG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gc3VtbWFyeTtcbiAgfVxuICBcbiAgY29uc3QgZmV0Y2hIYW5kbGVyID0gYXN5bmMgKC4uLmxvY2F0aW9uUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdW5pdHMgPSAndW5pdHM9bWV0cmljJztcbiAgICBjb25zdCBsb2NhdGlvbiA9ICdxPScgKyBsb2NhdGlvblBhcmFtcy5qb2luKCcsJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBfZmV0Y2hEYXRhKFtsb2NhdGlvbiwgdW5pdHNdKTtcbiAgICAgIGlmIChkYXRhLmNvZCA9PSAnNDA0JykgeyB0aHJvdyAnSW52YWxpZCBxdWVyeScgfTtcbiAgICAgIGRhdGFPYmogPSBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gX3N1bW1lZERhdGEoKTtcbiAgfVxuICBcbiAgcmV0dXJuIHsgZmV0Y2hIYW5kbGVyIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJmZXRjaGVyOyJdLCJuYW1lcyI6WyJ1bEdlbmVyYXRvciIsInJvb3QiLCJjaGlsZENvdW50IiwiaWQiLCJ1bCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJsaXN0SXRlbSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZWxlbWVudEdlbmVyYXRvciIsImVsZW1lbnROYW1lIiwiY2xhc3NlcyIsImF0dHJpYnV0ZXMiLCJlbGVtZW50Iiwib2JqIiwibGVuZ3RoIiwia2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWJ1ZVdpdGhDbGFzc2VzIiwiT2JqZWN0Iiwia2V5cyIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwiZW50cmllcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWJ1ZVdpdGhBdHRyaWJ1dGVzIiwidG9DZWxzaXVzIiwiYXJncyIsImNvbnZlcnRlZCIsInRlbXAiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwidG9GYWhyZW5oZWl0IiwidW5pdHMiLCJrZXkiLCJmIiwiYyIsIndpbmQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaCIsImRvbUNyZWF0b3JPYmoiLCJpbnRlcmFjdGl2ZSIsImRyYXdQYWdlIiwiY2hpbGRFbGVtZW50Q291bnQiLCJyZW1vdmVDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWN0aW9uIiwiYXJ0aWNsZSIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwidGV4dENvbnRlbnQiLCJnZXRJbnRlcmFjdGl2ZSIsInJlc3VsdHMiLCJjYXJkRGl2IiwiYnV0dG9uRGl2IiwiZkJ1dHRvbiIsImNCdXR0b24iLCJkYXRhRGl2IiwiYXBpQ2FsbGVyIiwiZGF0YU9iaiIsImFwaUtleSIsImZldGNoSGFuZGxlciIsImFzeW5jIiwibG9jYXRpb25QYXJhbXMiLCJsb2NhdGlvbiIsImpvaW4iLCJkYXRhIiwiYXBpUXVlcnkiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiX2ZldGNoRGF0YSIsImNvZCIsImVycm9yIiwiRXJyb3IiLCJ3ZWF0aGVyIiwidGVtcGVyYXR1cmUiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJmZWVscyIsImZlZWxzX2xpa2UiLCJtYXgiLCJ0ZW1wX21heCIsIm1pbiIsInRlbXBfbWluIiwic3BlZWQiLCJfc3VtbWVkRGF0YSIsInVuaXRIYW5kbGVyT2JqIiwibGlzdEl0ZW1zIiwid2luZFNwZWVkIiwib25DbGljayIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxhYmVsZWRWYWx1ZXMiLCJuZXdMYWJsZXMiLCJsYWJlbCIsInZhbHVlIiwibmV3TGFiZWwiLCJ0b2dnbGVVbml0cyIsImUiLCJjb252ZXJ0IiwidG9Vbml0IiwidGFyZ2V0IiwidGVtcGVyYXR1cmVWYWx1ZXMiLCJzcGxpY2UiLCJjb252ZXJ0ZWRWYWx1ZXMiLCJub2RlTGlzdCIsInRleHQiLCJub2RlIiwiaW5kZXgiLCJkYXRhc2V0IiwiaW5uZXJIVE1MIiwic2V0SW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsImNvbmNhdCIsIm1ha2VDYWxsIiwicXVlcnkiLCJxdWVyeVNlbGVjdG9yIiwibWVzc2FnZSIsImFsZXJ0IiwicnVuIiwic2V0RGF0YVZhbHVlcyIsInBhZ2UiLCJjYWxsRHJhdyIsIml0ZW1zIiwiaXRlbSIsInNldEludGVyYWN0aXZlRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9