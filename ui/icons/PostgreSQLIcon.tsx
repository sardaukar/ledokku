import React from 'react';

interface IconProps {
  opacity?: number;
  size?: 24 | 40;
}

export const PostgreSQLIcon: React.FC<IconProps> = ({
  opacity,
  size = 24,
  ...props
}) => (
  <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" {...props}>
    <path
      d="M17.128 0C16.1955 0.00693644 15.2684 0.142549 14.373 0.403L14.31 0.423C13.7452 0.323188 13.1735 0.268017 12.6 0.258C11.422 0.238 10.41 0.524 9.59401 1C8.79001 0.721 7.12201 0.24 5.36401 0.336C4.14001 0.403 2.80401 0.775 1.81401 1.82C0.827014 2.865 0.305014 4.482 0.415014 6.682C0.445014 7.289 0.618014 8.279 0.905014 9.561C1.19201 10.843 1.59501 12.344 2.09801 13.713C2.60101 15.083 3.15201 16.313 4.01301 17.149C4.44301 17.568 5.03501 17.92 5.73301 17.891C6.22301 17.871 6.66601 17.656 7.04801 17.339C7.23401 17.584 7.43301 17.691 7.61401 17.79C7.84201 17.915 8.06401 18 8.29401 18.056C8.70701 18.159 9.41401 18.297 10.242 18.156C10.524 18.109 10.821 18.017 11.117 17.886C11.128 18.216 11.141 18.539 11.154 18.866C11.195 19.902 11.221 20.859 11.532 21.698C11.582 21.835 11.719 22.541 12.259 23.164C12.799 23.788 13.857 24.177 15.062 23.919C15.912 23.737 16.993 23.409 17.711 22.387C18.421 21.377 18.741 19.928 18.804 17.578C18.82 17.451 18.839 17.343 18.859 17.242L19.028 17.257H19.048C19.955 17.298 20.939 17.169 21.761 16.787C22.489 16.45 23.04 16.109 23.441 15.504C23.541 15.354 23.651 15.173 23.681 14.861C23.711 14.549 23.532 14.061 23.235 13.836C22.64 13.384 22.266 13.556 21.865 13.639C21.47 13.7263 21.0675 13.7752 20.663 13.785C21.819 11.838 22.648 9.77 23.121 7.94C23.401 6.86 23.558 5.864 23.571 4.993C23.584 4.122 23.513 3.351 22.991 2.684C21.36 0.6 19.067 0.024 17.293 0.004C17.238 0.003 17.183 0.002 17.128 0.003V0ZM17.081 0.64C18.759 0.624 20.903 1.095 22.442 3.062C22.788 3.504 22.891 4.15 22.879 4.946C22.866 5.741 22.719 6.693 22.45 7.736C21.928 9.756 20.942 12.111 19.553 14.224C19.6021 14.2589 19.6551 14.2877 19.711 14.31C20.001 14.43 20.662 14.533 21.981 14.262C22.313 14.192 22.556 14.145 22.808 14.337C22.8693 14.3889 22.9176 14.4543 22.9494 14.528C22.9811 14.6018 22.9954 14.6818 22.991 14.762C22.9776 14.8834 22.9328 14.9992 22.861 15.098C22.606 15.481 22.103 15.844 21.458 16.143C20.887 16.409 20.068 16.548 19.342 16.556C18.978 16.56 18.642 16.532 18.357 16.443L18.339 16.436C18.229 17.496 17.976 19.589 17.811 20.544C17.679 21.314 17.448 21.926 17.007 22.384C16.567 22.842 15.944 23.118 15.106 23.298C14.068 23.521 13.311 23.281 12.823 22.87C12.336 22.46 12.113 21.916 11.979 21.583C11.887 21.353 11.839 21.055 11.793 20.657C11.747 20.259 11.713 19.772 11.69 19.223C11.6594 18.3824 11.6494 17.5411 11.66 16.7C11.2264 17.0971 10.6876 17.361 10.108 17.46C9.41901 17.577 8.80401 17.462 8.43701 17.37C8.2561 17.3246 8.08146 17.2571 7.91701 17.169C7.74701 17.078 7.58501 16.975 7.47701 16.772C7.41355 16.6557 7.39336 16.5207 7.42001 16.391C7.45381 16.2595 7.53053 16.143 7.63801 16.06C7.83601 15.899 8.09801 15.809 8.49301 15.727C9.21201 15.579 9.46301 15.478 9.61601 15.357C9.74601 15.253 9.89301 15.043 10.153 14.735C10.1518 14.7214 10.1508 14.7077 10.15 14.694C9.6847 14.6809 9.22903 14.5583 8.82001 14.336C8.67001 14.494 7.90401 15.304 6.97001 16.428C6.57701 16.898 6.14301 17.168 5.68501 17.187C5.22701 17.207 4.81301 16.976 4.46101 16.635C3.75801 15.952 3.19701 14.777 2.70801 13.449C2.22001 12.121 1.82301 10.642 1.54101 9.382C1.25801 8.122 1.09101 7.106 1.06701 6.616C0.962014 4.534 1.44901 3.131 2.28401 2.246C3.12001 1.361 4.26601 1.026 5.38301 0.962C7.38801 0.847 9.29201 1.546 9.67701 1.696C10.419 1.192 11.375 0.878 12.569 0.898C13.1359 0.90595 13.6999 0.979098 14.25 1.116L14.27 1.107C14.5121 1.02189 14.7589 0.950441 15.009 0.893C15.6882 0.734555 16.3826 0.650394 17.08 0.642L17.081 0.64ZM17.233 1.31H17.087C16.5141 1.31799 15.9433 1.3823 15.383 1.502C16.629 2.054 17.57 2.904 18.233 3.752C18.6936 4.33914 19.0742 4.98477 19.365 5.672C19.475 5.936 19.549 6.159 19.591 6.332C19.612 6.419 19.626 6.492 19.631 6.568C19.633 6.606 19.635 6.645 19.619 6.712C19.619 6.715 19.614 6.722 19.613 6.725C19.643 7.601 19.426 8.195 19.4 9.031C19.38 9.637 19.535 10.349 19.573 11.126C19.609 11.856 19.521 12.658 19.047 13.445C19.087 13.493 19.123 13.541 19.161 13.589C20.415 11.614 21.319 9.429 21.801 7.566C22.059 6.563 22.196 5.654 22.208 4.934C22.218 4.214 22.084 3.692 21.913 3.474C20.571 1.758 18.755 1.321 17.233 1.309V1.31ZM12.443 1.566C11.261 1.569 10.413 1.926 9.77001 2.461C9.10701 3.014 8.66201 3.771 8.37001 4.546C8.02301 5.466 7.90401 6.356 7.85701 6.96L7.87001 6.952C8.22701 6.752 8.69601 6.552 9.19801 6.436C9.70001 6.321 10.241 6.285 10.731 6.475C11.221 6.665 11.626 7.112 11.773 7.79C12.477 11.047 11.554 12.258 11.214 13.172C11.085 13.5033 10.9745 13.8415 10.883 14.185C10.926 14.175 10.969 14.163 11.012 14.159C11.252 14.139 11.44 14.219 11.552 14.267C11.894 14.409 12.129 14.707 12.256 15.047C12.289 15.136 12.313 15.232 12.327 15.331C12.3418 15.3717 12.3486 15.4148 12.347 15.458C12.3091 16.7038 12.3134 17.9505 12.36 19.196C12.383 19.734 12.417 20.208 12.46 20.582C12.503 20.955 12.564 21.239 12.603 21.335C12.731 21.655 12.918 22.074 13.256 22.359C13.594 22.643 14.079 22.833 14.965 22.643C15.733 22.478 16.207 22.249 16.524 21.92C16.84 21.591 17.029 21.133 17.15 20.432C17.331 19.382 17.695 16.337 17.739 15.764C17.719 15.332 17.783 15 17.921 14.747C18.063 14.487 18.283 14.328 18.473 14.242C18.568 14.199 18.657 14.17 18.73 14.149C18.6527 14.0379 18.5717 13.9295 18.487 13.824C18.2131 13.4918 17.9887 13.1216 17.821 12.725C17.7407 12.5612 17.655 12.4001 17.564 12.242C17.431 12.002 17.263 11.702 17.087 11.365C16.735 10.69 16.352 9.872 16.153 9.075C15.955 8.279 15.926 7.455 16.434 6.874C16.884 6.358 17.674 6.144 18.86 6.264C18.825 6.159 18.804 6.072 18.745 5.932C18.4769 5.30089 18.1269 4.7078 17.704 4.168C16.699 2.883 15.072 1.609 12.558 1.568H12.443V1.566ZM5.80101 1.618C5.67401 1.618 5.54701 1.622 5.42101 1.629C4.41101 1.687 3.45601 1.98 2.77301 2.704C2.08901 3.428 1.63901 4.615 1.73701 6.58C1.75601 6.952 1.91801 7.994 2.19601 9.232C2.47301 10.47 2.86601 11.927 3.33801 13.214C3.81101 14.501 4.38401 15.621 4.92801 16.151C5.20201 16.416 5.44001 16.523 5.65601 16.514C5.87301 16.504 6.13401 16.379 6.45301 15.996C7.03462 15.2944 7.63825 14.6114 8.26301 13.948C7.81972 13.5631 7.48046 13.0728 7.27651 12.5223C7.07256 11.9718 7.01049 11.3788 7.09601 10.798C7.19901 10.059 7.21301 9.368 7.20101 8.822C7.18901 8.29 7.15101 7.936 7.15101 7.715C7.15084 7.70867 7.15084 7.70233 7.15101 7.696V7.691L7.15001 7.685V7.684C7.14942 6.53279 7.34976 5.39032 7.74201 4.308C8.02201 3.564 8.43901 2.808 9.06401 2.196C8.45001 1.994 7.36001 1.686 6.18001 1.628C6.05345 1.6215 5.92674 1.61817 5.80001 1.618H5.80101ZM18.199 6.9C17.52 6.909 17.139 7.084 16.939 7.313C16.656 7.638 16.629 8.208 16.805 8.91C16.98 9.613 17.342 10.399 17.682 11.052C17.852 11.379 18.017 11.673 18.15 11.912C18.284 12.152 18.382 12.322 18.442 12.467C18.497 12.601 18.558 12.719 18.62 12.829C18.883 12.274 18.93 11.729 18.903 11.161C18.868 10.458 18.705 9.739 18.729 9.011C18.756 8.16 18.924 7.606 18.939 6.948C18.6936 6.91621 18.4465 6.90018 18.199 6.9ZM9.96501 7.015C9.75758 7.01693 9.551 7.04175 9.34901 7.089C8.94645 7.18681 8.55871 7.3378 8.19601 7.538C8.07333 7.60381 7.95656 7.68009 7.84701 7.766L7.82501 7.786C7.83101 7.932 7.86001 8.286 7.87201 8.807C7.88401 9.377 7.87001 10.104 7.76001 10.891C7.52101 12.601 8.76201 14.017 10.22 14.019C10.305 13.668 10.445 13.312 10.585 12.937C10.991 11.843 11.79 11.045 11.117 7.931C11.007 7.421 10.789 7.215 10.489 7.099C10.3209 7.03953 10.1433 7.01107 9.96501 7.015ZM17.882 7.219H17.932C17.998 7.221 18.059 7.228 18.112 7.241C18.166 7.253 18.212 7.271 18.25 7.296C18.2695 7.30807 18.2863 7.3241 18.2992 7.34305C18.3121 7.36199 18.3209 7.38344 18.325 7.406L18.324 7.414H18.325H18.324C18.326 7.46147 18.3138 7.50846 18.289 7.549C18.2595 7.60389 18.2225 7.65437 18.179 7.699C18.0776 7.81071 17.9417 7.88533 17.793 7.911C17.6483 7.92849 17.5023 7.8918 17.383 7.808C17.3342 7.77516 17.2904 7.73542 17.253 7.69C17.2207 7.65432 17.1988 7.61035 17.19 7.563C17.1879 7.53993 17.1906 7.51667 17.1978 7.49466C17.205 7.47265 17.2167 7.45235 17.232 7.435C17.2648 7.39772 17.3046 7.36715 17.349 7.345C17.445 7.291 17.575 7.251 17.722 7.229C17.777 7.221 17.831 7.217 17.882 7.216V7.219ZM10.062 7.387C10.115 7.387 10.171 7.392 10.228 7.4C10.381 7.421 10.517 7.462 10.621 7.522C10.6717 7.54847 10.7169 7.58446 10.754 7.628C10.7742 7.65109 10.7895 7.67811 10.7988 7.70737C10.808 7.73662 10.8112 7.76747 10.808 7.798C10.7984 7.8555 10.7724 7.90898 10.733 7.952C10.6921 8.00223 10.6439 8.04605 10.59 8.082C10.46 8.17414 10.3002 8.21443 10.142 8.195C9.98035 8.16843 9.83237 8.0881 9.72201 7.967C9.67506 7.91824 9.63533 7.86301 9.60401 7.803C9.57105 7.7502 9.55663 7.68792 9.56301 7.626C9.57801 7.518 9.66701 7.462 9.75401 7.431C9.85311 7.39933 9.95711 7.38578 10.061 7.391L10.062 7.387ZM19.122 14.73L19.119 14.731C18.972 14.784 18.851 14.806 18.749 14.851C18.6459 14.8907 18.5608 14.9668 18.51 15.065C18.447 15.18 18.393 15.384 18.409 15.731C18.4543 15.7622 18.5042 15.7858 18.557 15.801C18.728 15.853 19.015 15.887 19.335 15.882C19.973 15.875 20.758 15.726 21.175 15.532C21.5171 15.3731 21.8347 15.166 22.118 14.917H22.117C20.724 15.205 19.937 15.128 19.454 14.929C19.3341 14.8791 19.2222 14.8117 19.122 14.729V14.73ZM11.091 14.824H11.07C11.017 14.829 10.94 14.847 10.791 15.012C10.443 15.402 10.321 15.647 10.034 15.876C9.74701 16.104 9.37401 16.226 8.62901 16.379C8.39301 16.427 8.25801 16.48 8.16801 16.523C8.19701 16.547 8.19401 16.553 8.23801 16.576C8.34701 16.636 8.48701 16.689 8.60001 16.718C8.92001 16.798 9.44601 16.891 9.99501 16.798C10.544 16.704 11.115 16.441 11.602 15.758C11.686 15.64 11.695 15.466 11.626 15.279C11.556 15.092 11.403 14.931 11.295 14.886C11.2307 14.855 11.1618 14.8347 11.091 14.826V14.824Z"
      fill="currentColor"
      opacity={opacity}
    />
  </svg>
);
